# My Page

Repository containing the source code for my Portfolio Page. Built with Angular and Tailwind.

## Simulate production

1) First built the docker image, this will build an nginx image that will serve the static files from angular's build process. At the project's root run:

```bash
sudo docker build -t prod-simulation .
```

2. Instantiate a new container from the image and bind a host machine port with the port by running:

```bash
sudo docker run --name=production -d -p 4000:80 prod-simulation
```

3. Open a browser and go to `localhost:4000/`. If everything worked the files should be served properly.

4. Stop and remove the running container using `-f` flag:

```bash
sudo docker rm -f production
```
