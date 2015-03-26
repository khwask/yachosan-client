# yachosan-client

### yachosan api
[making/yachosan-api](https://github.com/making/yachosan-api)

### Usage

* How to run api
```
git clone https://github.com/making/yachosan-api.git
cd yachosan-api
mvn package
java -jar .\target\yachosan-api-1.0.0-SNAPSHOT.jar --server.port=9999 --spring.profiles.active=dev
```

* How to run client
```
git clone https://github.com/khwask/yachosan-client.git
cd yachosan-client
npm install
npm start
```

Api runs at `http://localhost:9999/api/v1/schedules`, and client runs at `http://localhost:8000`.
