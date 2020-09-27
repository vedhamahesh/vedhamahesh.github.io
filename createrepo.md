# How To Create A Github Repository

[Create Repository On Github](#create-repository-on-github)  
[Install Git](#install-git)  
[Create Local Repository](#create-local-repository)  
[Add Git Remote](#add-git-remote)  
[Make Changes, Commit, And Push](#make-changes-commit-and-push)

## Create Repository On Github
Go to https://github.com and create a new repository.  
<kbd><img width="200"
  src="https://cdn.discordapp.com/attachments/741402710581969019/759561961427173446/unknown.png" /></kbd>
<kbd><img width="200"
  src="https://cdn.discordapp.com/attachments/741402710581969019/759562256861233162/unknown.png" /></kbd>

## Install Git
Go to https://git-scm.com and install.  
<kbd><img width="300"
  src="https://cdn.discordapp.com/attachments/741402710581969019/759561229429112882/unknown.png"></img></kbd>

## Create Local Repository
Create a folder on your computer.  
You can do this in Finder, or in the terminal by typing, `mkdir (name)`.  
Next, enter the folder by typing `cd (name)`.  
Then make the folder a git repository by typing, `git init`.

## Add Git Remote
Then, you have to connect the local folder to the Github repository by adding a remote.  
The command for this is `git remote add origin (https key)`.  
In order to get `(https key)` you have to go to your Github repository and copy it with this:  
<kbd><img width="500"
  src="https://cdn.discordapp.com/attachments/741402710581969019/759573088806502420/unknown.png"></img></kbd>   
<kbd><img width="500"
  src="https://cdn.discordapp.com/attachments/741402710581969019/759573876719353866/unknown.png"></img></kbd>

## Make Changes, Commit, And Push
In order to fully establish the connection to the Github repository, you have to make some changes and push the changes.  
First, make any changes you want to the folder. They don't have to permanent.  
Next, type `git add .`. This **stages** all the changes before committing.
Next, type `git commit -m "(message)"`. Replace `(message)` with a message describing your changes. This will fully establish the changes in the local folder.  
Finally, you have to push the changes from your local folder to Github. Use `git push origin master` to do this.
