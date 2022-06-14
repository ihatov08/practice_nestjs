#!/bin/bash

curl -X POST -H "Content-Type: application/json" -d '{"title": "title", "description": "hogegw"}' localhost:3000/tasks
