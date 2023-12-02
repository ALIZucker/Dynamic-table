let table = document.getElementById('table-main')

let persons = []

persons.push(HollywoodActor("Bradley Pitt", "+2137004911", "993082", 'assets/Brad_Pitt_2019_by_Glenn_Francis.jpg'))
persons.push(HollywoodActor("Nicole Kidman", "+219930825", "982020", 'assets/Nicole.jpg'))
persons.push(HollywoodActor("Rafael Phoenix", "+219254825", "99614", 'assets/Nicole.jpg'))
function HollywoodActor(Name, mobile, identity, avatar) {
    let person = new CreateHuman(Name, mobile, identity, avatar)
    return person
}

function CreateHuman(name, mobile, identity, avatar) {
    this.name = name
    this.mobile = mobile
    this.identity = identity
    this.avatar = avatar
}

let text = "  <tr>\n" +
    "            <th>#</th>\n" +
    "            <th>Name</th>\n" +
    "            <th>Mobile</th>\n" +
    "            <th>Identity</th>\n" +
    "            <th>avatar</th>\n" +
    "        </tr>"

function showFunction(value, index) {
    text = text + "  <tr>\n" +
        "            <td>" + (index + 1) + "</td>\n" +
        "            <td>" + value['name'] + "</td>\n" +
        "            <td>" + value['mobile'] + "</td>\n" +
        "            <td>" + value['identity'] + "</td>\n" +
        "            <td> <img src=" + value['avatar'] + "></td>\n" +

        "        </tr>"

}


persons.forEach(showFunction)
alert(text)
table.innerHTML = text


