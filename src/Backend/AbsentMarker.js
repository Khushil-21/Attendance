const fs = require('fs')
var path = require('path');
path=path.join(__dirname,"./DataFiles/StudentsStatus.csv")

const AbsentWriter = (absenties, students,operation,rolls,selectedData) => {
    var text='RollNo,Name,Status\n'
    console.log(absenties.indexOf(1))
    console.log(absenties)
    console.log(operation)
    console.log(rolls)

    let temp = []

    if (operation === 'present') {
        for (let i of rolls) {
            if (absenties.indexOf(`${i}`) === -1) {
                temp.push(`${i}`)
            }
        }
        absenties=temp
    }

    console.log(absenties)
    for (let i of students) {
            if (absenties.indexOf(`${i.RollNo}`) === -1)
            {
                text = text + `${i.RollNo},${i.Name},Present\n`
            
                } else {
            
            text = text + `${i.RollNo},${i.Name},Absent\n`
            }
    }
    console.log(text)
    fs.writeFileSync(path,text)
}
module.exports = AbsentWriter;