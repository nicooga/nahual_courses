# Deploy guide

Deploy is solved by using docker-compose on a remote host.

Ah the moment I'm using a DigitialOcean "droplet" (just a virtual machine).
You'll need SSH access to it, if you don't have it contact an administrator.

## Configuring your docker client

You'll need some deploy credentials, consisting of the IP of the remote host to deploy, and a few TLS certificates. If this is the first time deploying to this remote host, you'll need to perform the setup. Refer to the [Host setup](https://github.com/nicooga/nahual_courses/blob/master/DEPLOY.md#host-setup) section for that. Otherwise, ask for this information to an administrator

Once you got your hands on them, write a bash file named `.deploy_vars` on this repo with the following variables: `REMOTE_HOST` and `CERTIFICATES_DIR`. It would look like this:

~~~bash
export REMOTE_HOST=123.123.123
export CERTIFICATES_DIR=/some/dir
~~~

`CERTIFICATES_DIR` should be a directory where you put all the certificates that `docker-machine` generated, without renaming them.

Then use the utility script `./scripts/deploy`. That's it.

## Deploying latest changes

You need to configure your docker client and have SSH access to the server. For both you'll need to contact an administrator.

Once you have your docker client configured to run against remote host you can just deploy latest changes using `docker-compose`.

There's a couple more things that need to be done, so I've created a convenience script. Just run `./scripts/deploy`

## Host setup

This is only needed if installing the site in a new host.

[Install `docker-machine`](https://docs.docker.com/machine/install-machine/).

Create the machine:

~~~bash
docker-machine create --driver=generic --generic-ip-address=123.123.123.123 nahual-courses
~~~

This will install docker in the remote host and store configuration for running docker commands in the remot host. The name for the machine is arbitrary. In this case I've specified it to be `nahual-courses`.

Run `docker-machine config nahual-courses` to see a list of flags:

~~~
--tlsverify
--tlscacert="/home/username/.docker/machine/machines/nahual-courses/ca.pem"
--tlscert="/home/username/.docker/machine/machines/nahual-courses/cert.pem"
--tlskey="/home/username/.docker/machine/machines/nahual-courses/key.pem"
-H=tcp://123.123.123.123:2376
~~~

You'll note that `docker-machine` stored TLS certificates for connecting to the remote host.
These flags need to be passed to `docker` or `docker-compose` in order to run commands on the remote host.
This is sensitive data that you must store securely for deployment. Don't store them on this repo!
