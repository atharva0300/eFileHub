## Description ( IN PROGRESS ) 
This is a single page webpage application which allows you to convert multiple files to a zip file and share them via gmail, via a generated link or you can 
even save it on drive. Or you can upload any file and share that file via gmail, via generaed link or can save to drive.

## Screenshots 
![efileHub-1](https://user-images.githubusercontent.com/76089814/172340198-78461aba-805e-48c9-86b2-327ca96111c8.png)
![eFileHub-2](https://user-images.githubusercontent.com/76089814/172340211-2f89c154-958f-4004-9547-7ccf42da1482.png)
![eFileHub-3](https://user-images.githubusercontent.com/76089814/172340218-37764828-4491-4aa7-861f-b261e2f16eb2.png)


## Tech Stack used 
### Frontend stack 
  <ul>
  <li>1. Reactjs</li> 
  <li>2. tailwindCSS </li>
  </ul>
  
### Backend stack 
  <ul>
  <li>1. Nodejs</li>
  <li>2. Expressjs</li>
  <li>3. Adm-Zip library</zip>
  <li>4. Axios</li>
  <li>5. Archiver library</li>
</ul>

## New features to add to this project !
1. Replacing the Adm-Zip library with my own algorithms. The user must select an option from multiple algorithms for file zipping ( Will be implementing 5 algorithms for this ). 
2. Stasticising the degree of compression, the final compressed size, the compression percentage. Compare these factors for all the algorithms.
3. Feature to download the zipped file
4. Feature to create a sharable link ( one-time use link ) from where the zipped file can be downoaded
5. Supprting extraction of multiple files ( currently supports compression of just a single file )
6. New algorithms for compression multimedia files like - videos, images, audio files.
7. Feature to connect to Google drive and directly upload on the drive

