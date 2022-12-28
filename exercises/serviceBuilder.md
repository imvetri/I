# serviceBuilder
A fun project to create services without making code change. 


## Acceptance criteria

1. on `get-localhost:8080`, it should return a page that prompts for objectName and schema/example data. (Aim is to create a new route and coding a new route logics is skipped)
2. on `get-localhost:8080/{objectName}` returns an array of created objects
3. on `post-localhost:8080/{objectName}` pushes new data at end of list
4. on `update-localhost:8080/{objectName}/id` updates the object with new data.

## Tests

1. hit `localhost:8080/movies`. Expect 404
2. hit `localhost:8080`, Type serviceName: Movies, Type schema: {name: string, writer: Array<Writer>, cast: Array<Actor> }, Press Submit. or 
   hit `localhost:8080/put` `{route: Movies, schema: {name: string, writer: Array<Writer>, cast: Array<Actor> }}`, Expect 200?
3. hit `localhost:8080/movies`. Expect 200
4. hit `localhost:8080/movies/put` `{name: "Fluid", writer: ["vetrivel","victor"], cast: ["computer","monitor"]}`. Expect index in response.
  
  A: This looks like it creates everything in an array and this design will cause problem to fetch writer's details for a given movie. 
  B: No, do localhost:8080/writers/vetrivel
  A: Since it is an array, it will impact performance.
  B: Then use hash.
  C: If there are duplicates, it will return single entry.
  A: Store hash value as array and return array.


## Next

1. Figure out how to link object properties that link to other objects. 
2. Things like associations, compositions...?

## Next 

1. Figured out object linking - Start with parent empty object and it contains list of other entities. Use index position as the unique ID.
2. Forget about associations, compoositions etc - its all a child object/ objects.
3. Include validation as part of schema



## Motivation
Web application development is a repetitive process both on the front end and backend. In the front end, the repetitive task is to bind model to view, create views, and in controller modifiy model and views, why can't this be solved in a click ?. Next the backend, the repetitive task is to update the handlers or the endpoint with new requirement so that developers will have to modify route handler, update schema of DB, etc, why can't this be automated? The source of truth is the DB schema, build a schema builder that generates code in target framewrok(swagger already does it! why isn't it popular), Anyway, this project is just meant to try and see if it is possible to rapidly build services.

## Applications
Don't have to re-build or re-deploy the application! creation, deletion, updation of new endpoints are done via service.
Finalise the usage, and do a sketchy DB design as well, don't cares about performance. Most of the modern solutions are tool heavy, focuses more on how to interlock tools and juices the hardware out. 

## Performance Tests


