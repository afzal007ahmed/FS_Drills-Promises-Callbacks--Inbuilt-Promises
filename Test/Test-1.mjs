import { makeDirectory, CreateFiles, deleteFiles } from "../Problem-1.js"

makeDirectory('/home/afzal-ahmed/Downloads/', 'AllJsonFiles', (path, filename, data, index) => {
    CreateFiles(path, filename, data, (path, filename, index) => {
        deleteFiles(path, filename, index);
    }, index)
})