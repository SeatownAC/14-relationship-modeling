## Mongo/Express 2 Resource API

##![Travis] (https://travis-ci.com/SeatownAC/14-relationship-modeling.svg?branch=master)

## Heroku https://lab-14-relationship-model.herokuapp.com/

## Travis https://travis-ci.com/SeatownAC/14-relationship-modeling

## GitHub https://github.com/SeatownAC/14-relationship-modeling/pull/2







#### Feature Tasks
  * continue working on the `express` and `mongoDB` REST API that you started yesterday
  * include an additional resource that contains a "relationship" to the single resource that has already been created
  * create `GET`, `POST`, `PUT`, and `DELETE` routes for your newly added resource
  * test your application to ensure that it meets the standard criteria of a working **full CRUD** REST API
  * use `populate` in the `get()` route logic your  `/api/new-resource-name/:id` route to populate the associated property used to house related resources **(ex: `List.findById(req.params.id).populate('notes')`)**