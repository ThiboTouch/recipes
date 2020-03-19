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
This branch has the App working without the security and the edit features.
* Unhappy with the User experience implemented on the steps component could use a better design.
##### Edit_Recipe:
This branch has the edit features although there are minor issues:
* Repository service fails to populate the Recipe object on the CreateItemComponent once returned from the server, throwing an undefied property error in the template. Have battled with this issue for some days.
##### Security:
This branch has the user security features although there are minor issues:
* The authentcation service loses state after a browser refresh, might need to save some data in LocalStorage. Not sure if that is good security practice though.





