#! /usr/bin/env node

var fs=require('fs')
var filePath=__dirname

/**
 * Module dependencies.
 */

var exec =require('child_process').exec

exec('which npm',function(error,stdout,stderr){
    if(error!==null){
        console.log('exec error: '+error)
    }

    console.log('stdout',stdout)

    var path=stdout.replace('npm','')
    path = path.replace('\n','')
    console.log('path',path)

    if(/\.nvm/.test(path)){
        console.log(filePath+'/exec.sh')
        fs.createdReadStream(filePath+'/exec.sh').pipe(fs.createWriteStream(path + 'clone'))

        exec('chmod 755 '+path+'clone',function(error,stdout,stderr){
            console.log('stdout: '+stdout)
            console.log('stderr: ' +stderr)
            if(error!==null){
                console.log('exec error: '+error)
            }
            return console.log('copy complete!')
        })
    } else {
        console.log('bbbb')
        exec('sudo cp '+filePath +'/exec.sh '+ path + 'clone',function(error,stdout,stderr){
            console.log('error,stdout,stderr',{error,stdout,stderr})
           
            console.log('sudo cp '+filePath +'/exec.sh '+ path + 'clone')
            if(error!==null){
                console.log('exec error: '+ error)
            }
        })
    }
})