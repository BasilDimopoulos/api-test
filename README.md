# Developer API challenge
This repo showcases work done for an backend coding challenge. 

## Running the application with npm
```
npm install
npm run dev
```

Application should be running at http://localhost:7000/

## Running the application with DOCKER
```
docker build -t api-test .
docker run -p 7000:7000 -it api-test 
```

Application should be running at http://localhost:7000/