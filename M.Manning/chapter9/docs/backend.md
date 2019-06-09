# Backend

##### Using [json-server](https://github.com/typicode/json-server)

* Install the `json-server` library

```
$ npm install json-server --save
```

* Edit the `package,json` file and add the below `api` K/V (Key/Value) pair to the `scripts` JSON object


```json
"scripts": {
    ... <other key/value pairs> ...
    "api": "json-server --watch db.json"
}
```

* Open a new `bash` terminal and run the JSON server


```
$ npm run api
```
