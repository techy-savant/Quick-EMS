<h1 align="center">
  <a href="https://github.com/techy-savant/Quick-EMS">
    Quick-EMS
  </a>
</h1>



<p align="center">
  A simple and beautiful <a href="https://quick-ems.vercel.app/">EMS</a> application built with <a href="https://reactjs.org">React</a> and <a href="https://firebase.google.com/">Firebase</a>.
</p>


![Quick-EMS](https://github.com/techy-savant/Quick-EMS/assets/108519575/c56a6d22-59c3-4943-a45b-3d931d0f6de5)

## Technologies Used

- [React](http://reactjs.org)
- [Firebase](https://firebase.google.com)
- [Primitive UI](https://taniarascia.github.io/primitive)
- [SweetAlert2](https://sweetalert2.github.io)


#### Used Firebase to handle
- Authentication
- Adding Employee Data
- Storing Employee Data
- Editing Employee Data
- Deleting Employee Data

#### Data Protection
I ued `dotenv` to secure my sensitive firebase configuration data. I created a `envSample` file to show you how you should set up your own `.env` file.

#### Branches
There are 5 branches in this application. Each one showing the state of the application at various milestones. The `finished-app` branch is the branch containing the completed code.

 **Live Site** » [Quick-EMS Website](https://quick-ems.vercel.app/)

## Development

To get a local copy of the code, clone it using git:

```
git clone https://github.com/techy-savant/Quick-EMS.git

cd Quick-EMS
```

Install dependencies:

```
npm install
```

Now, you can start a local web server by running:

```
npm run dev
```



#### Available Scripts

| Script        | Description                                                             |
| ------------- | ----------------------------------------------------------------------- |
| npm run dev     | Runs the app in the development mode.                                   |
| npm run build | Builds the app for production to the `build` folder.                    |

