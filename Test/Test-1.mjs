import { makeDirectory, CreateFiles, deleteFiles } from "../Problem-1.js"

makeDirectory('/home/afzal-ahmed/Downloads/', 'AllJsonFiles', (path, filename, data) => {
    CreateFiles(path, filename, data, (path, filename) => {
        deleteFiles(path, filename);
    })
})