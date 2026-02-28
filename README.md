# My Page

Repository containing the source code for my Portfolio Page. Built with Angular and Tailwind.

## Simulate production

1. First built the docker image. At the project's root run:

```bash
sudo docker build -t prod-simulation .
```

This will run the one container that will build and serve the application. Soon this will be changed to a multicontainer strategy

2. Instantiate a new container from it and bind a host machine port with the port by running:

```bash
sudo docker run -p 4000:70 prod-simulation
```

3. Open a browser and go to `localhost:4000/`. If everything worked the files should be served properly.
