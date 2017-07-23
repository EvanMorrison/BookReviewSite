# Full Stack Book Review SPA

## [Visit the deployed project](https://bookreviewspa.evmorrison.com)

This is a full-stack pair programming project done while at [V School](http://vschool.io/en/). It is as exercise in 
team coding and project development, using Github, Trello, and implementing SCRUM and Agile 
practices.

The team consisted of myself and [Susan Sico](http://susansico.com).

### Description

This full-stack SPA was built with Angular, Node, Express Server, and MongoDB, and uses 
Bootstrap, and [UI Bootstrap](https://angular-ui.github.io/bootstrap/) for responsive design.

The app allows users to add and share review of their favorite books, and find information on new and popular releases.

#### Token Authentication 
The web app  uses token authentication to store and track each user's personal book reviews,
 which can be created, edited and deleted. The signup and login dialogs use form validation
 to ensure required fields are provided and valid.

 Access to the site is secure using TLS over https, using a signed certificate obtained from the [Lets Encrypt certificate authority](https://letsencrypt.org/).

#### Google Books API
The search view of the web app provides the ability to search for other books through the 
Google Book API, and add them to the database.


