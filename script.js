async function gdToMd(){
    result = await navigator.permissions.query({name: "clipboard-read"})

    if (result.state == "granted" || result.state == "prompt") {
        driveLink = await navigator.clipboard.readText()
        document.getElementById('drive-link').value = driveLink
        start = driveLink.indexOf('/d/') + 3
        end = driveLink.indexOf('/view')
        if (start==-1 || end==-1) {
            alert('Link not valid')
            return 
        }
        id = driveLink.slice(start,end)
        mdLink = '[file](https://drive.google.com/uc?export=view&id=' + id + ')'
        document.getElementById('drive-link').value = mdLink
    }
}

gdToMd()

async function writeToClipboard(){
    try {
        await navigator.clipboard.writeText(mdLink)    
        document.getElementById('alert-success').style.visibility = 'visible'   
        close()
    } catch (error) {
        alert(error)
    }
}



