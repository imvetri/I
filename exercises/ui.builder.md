# ui-builder
Ideas and thoughts to speed up application, api, ui building duration. This also targets tooling concepts to lower maintenance.

## UML to generate code
But how to generate code for user interfaces and business logic? - Every user interface provides three actions - view, new (create, update), hide(delete). Business objects and user interface have tree structure in common, next find out how to link them. Its figured out, use the three actions of user interface to CRUD operation on business object.


## Build the builder that builds the builder
Here is a wordplay to solve builders problem that sounds effecient and simple. Build the builder to build the builder. It need not stop there, it can go on like. Build the builder to build the builder to build the builder to build the builder.

It may sound it never ends, but computing has a concept to solve such problems that never ends. 

Its recursive.

so build the builder to build the builder problem boils down to just build the builder.

How can we use the builder to build itself ?

That's when we need to define the problem in terms of the layer on top of which we are going to build. Since this is an user interface problem, the layer underneath the builder will be evented architecture(mostly, others are not popular)

An UI builder can be data driven, cli driven or even diagram driven or even UI driven(hold on). Lets solve the UI problem using the UI. Because just like how you look at a recursive function, it will look simple, has low maintenance, it grows outwards and HARD TO COMMUNICATE.

A UI builder will help