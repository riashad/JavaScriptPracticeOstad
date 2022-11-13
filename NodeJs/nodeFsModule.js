// ✅ FS Module:  File System Module (physical files)
// fs module is liable for Synchronous or Asynchronous file I/O operation

// ✅ Synchronous Module: after finishing one task you can move to next task till then wait.
// ✅ Asynchronous Module: can work simultaneously, no loading, no wait, move to next task while previous task ongoing.


// ✅Asynchronous Essential Module: "callback" method thakbe
/*
	1. fs.readFile    (callback)  -- read existing file
	2. fs.writeFile   (callback)  -- writes to file and if available overwrites
	3. fs.rename      (callback)  -- renames the file
	4. fs.exists      (callback)  -- checks the file exists or not
	5. fs.unlink      (callback)  -- deletes the file
	6. fs.appendFile  (callback)  -- append new content to exiting file
	7. fs.open        (callback)  -- opens the file
	8. fs.mkdir       (callback)  -- creates new directory
	9. fs.rmdir       (callback)  -- rename an existing directory
	10. fs.readdir    (callback)  -- reads the content of an existing directory

	⭐️"callback method" amader ke kaj shesh hoile notify korbe

*/

// ✅Synchronous Essential Module: "Sync" add hobe
/*
	1. fs.readFileSync  -- read existing file
	2. fs.writeFileSync  -- writes to file and if available overwrites
	3. fs.renameSync  -- renames the file
	4. fs.existsSync  -- checks the file exists or not
	5. fs.unlinkSync  -- deletes the file
	6. fs.appendFileSync  -- append new content to exiting file
	7. fs.openSync  -- opens the file
	8. fs.mkdirSync  -- creates new directory
	9. fs.rmdirSync  -- rename an existing directory
	10. fs.readdirSync  -- reads the content of an existing directory
*/