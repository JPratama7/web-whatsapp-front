import axios from "axios";

send_data = (data, cb) =>{
    axios.post("http://172.18.0.10/chatbot",{
        nomor : data.nomor,
        pesan : data.pesan
    }).then((res) =>{
        cb(res.data.pesan)
    }).catch((error) =>{
        console.log(error)
    })
}

module.exports = {
    send_data
};