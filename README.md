# Recipes
##### Development Setup:
1. Ensure you have Azure Cosmos DB emulator running on https://localhost:8081/
2. open up cmd/powershell and set the working directory as ServerApp folder of the solution
3. Run the following command to start the server app:
    ___
    dotnet watch run
    ___
4. This will run the server app and get things ready.
5. open another cmd/powershel and set the working directory as the ClientApp folder of the solution
6. Run the following command to start the client app:
    ___
    npm start
    ___
7. You can then navigate to localhost:5001 from your browser to use the app

#### Branches
##### Master:
* Unhappy with the User experience implemented on the steps component could use a better design.
* Add functionality to allow photo upload of the recipe being created.






