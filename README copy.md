# Food Pickup-Ordering

A food ordering experience for a single restaurant. Hungry clients of this fictitious restaurant can visit its website, select one or more dishes and place an order for pick-up. They will receive a notification when their order is ready.

The restaurant and client both need to be notified since this app serves as an intermediary.

When an order is placed the restaurant receives the order via SMS. The restaurant can then specify how long it will take to fulfill it. Once they provide this information, the website updates for the client and also notifies them via SMS.

Used Twilio to implement SMS communication from the website to the client and restaurant.

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information 
  - username: `labber` 
  - password: `labber` 
  - database: `midterm`
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
7. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
8. Visit `http://localhost:8080/`

## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x

## Registration Page
<img width="1429" alt="Register Page" src="https://user-images.githubusercontent.com/55267263/188038783-c252d3ed-5e0a-4efc-a727-19a1a848ee19.png">

## Home Page 
<img width="1429" alt="Home Page 1" src="https://user-images.githubusercontent.com/55267263/188038787-ef93e0ee-98f6-484b-8192-5022865d2ae0.png">

## Home Page 
<img width="1429" alt="Home Page 2" src="https://user-images.githubusercontent.com/55267263/188038799-a372c745-81eb-4556-b9c9-5a23a01dc19a.png">

## Home Page 
<img width="1429" alt="Home Page 3" src="https://user-images.githubusercontent.com/55267263/188038809-b0e0674c-b562-42cf-91c6-c112fc02eefc.png">

## Home Page
<img width="1429" alt="Home Page 4" src="https://user-images.githubusercontent.com/55267263/188040038-18fe31ac-2199-4ee6-9b37-c2fd2e495908.png">

## Menu Page
<img width="1429" alt="Menu Page 1" src="https://user-images.githubusercontent.com/55267263/188038816-f21464b1-3d4a-489e-81e7-1204b6fd960f.png">

## Menu Page
<img width="1429" alt="Menu Page 2" src="https://user-images.githubusercontent.com/55267263/188038821-72f2d86f-190f-4315-a536-d50463299973.png">

## Menu Page
<img width="1429" alt="Menu Page 3" src="https://user-images.githubusercontent.com/55267263/188038827-b109879b-63e3-44c2-80ea-c52f1787e364.png">

##Checkout Page
<img width="1429" alt="Checkout Page" src="https://user-images.githubusercontent.com/55267263/188038829-74206f32-bdef-4679-96b1-2a20fe4709cd.png">

## Confirmation Page
<img width="1429" alt="Confirmation Page" src="https://user-images.githubusercontent.com/55267263/188038835-9cedaa8c-931f-4d1e-bf54-5255627f0e41.png">

## Authors

Jeffrey Lee - https://github.com/jeffreyleec
Jeffrey Ho - https://github.com/ynot9042
Mohammed Abbas - https://github.com/mo-ab93




