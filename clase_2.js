class TicketManager {
    #gain                                //Variable privada que solo esta disponible dentro de ticketManager
    constructor (){
        this.events= []                      //Inicialmente arranca vacio
        this.#gain = 0.15                  //Ganancia 0.15
    }
    getEvents(){
        console.log(this.events)       //Clg del array de arriba
        return this.events
    }

    getEventById(event_id){
        let one = this.events.find(e => e.id === event_id)
        if (one){
           console.log(one)
        return one
        } 
        console.log("not found")
        return null
        
    }

    addEvent({name,place,price,capacity,date}){
        capacity = capacity ?? 50       //Si el usuario no me pone la capicidad pone 50 por default
        date = date ?? new Date ()        
        let id = 0
        if (this.events.length===0){
            id=1
        } else {
            this.events[0]
            this.events[1]
            let lastEvent = this.events[this.events.length -1] //el ultimo elemento tiene indice igua a la longitud del array menos 1
            id = lastEvent.id + 1 
        }
        price = price + this.#gain * price 
        let event = {name,place,price,capacity,date,id, participants: []}
        this.events.push(event)
    }

    addParticipant(event_id, user_id){
        let found_event = this.getEventById (event_id)
        // console.log(found_event.participants)
        if (found_event){
            if(found_event.capacity > found_event.participants.length){
                let user = found_event.participants.includes(user_id)
                if(user) {
                    console.log(`el usuario ${user_id} ya se encuentra en la lista`)
                }else{
                    console.log("agregado usuario " + user_id)
                    found_event.participants.push(user_id)
                    // console.log(found_event.participants)
                
                }
            } else{
                console.log("no hay mas capacidad")
            }
        // }else{
        //     console.log("no se encontro el evento "+ event_id)
        }
        return null
    }

    changeName(event_id, new_name){
        let found_event = this.getEventById(event_id)
        found_event.name = new_name
        // for(let each of this.events){                        //si coincide el id del evento a modificar
        //     if (each.id === event_id){                       //retorno el evento encontrado y luego modificado
        //         return found_event                           //en caso contrario(no coincida)
        //     }else{                                           //retorno el evento del array
        //         return each
        //     }
        // }
        console.log("nombre cambiado")
    }

    editEvent(event_id, datos){               //datos va a ser el objeto con las variables a modificar(name, place, etc)
        let found_event = this.getEventById(event_id)
        for (let propiedad in datos){
            found_event[propiedad] = datos[propiedad]       //la propiedad del objeto se pasa entre corchetes             cuando quiero que sea una variable
        } 
    } 
        

    addNewEvent(event_id,new_place,new_date){
        let found_event = {...this.getEventById(event_id)}
        this.addEvent({name:found_event.name,
            place: new_place,
            price:found_event.price,
            capacity:found_event.capacity,
            date: new_date
        })
        console.log("se creo el nuevo evento")
    }

    deleteEvent(event_id){
        this.events = this.events.filter(each => each.id !== event_id)
        console.log("evento eliminado")
    }
}

let ticket = new TicketManager()
// console.log(ticket.gain)
ticket.addEvent({name:"Alice in borderland",place:"korea",price: 5,capacity:undefined,date: null})
ticket.addEvent({name:"Pokemon",place:"japon",price: 50,})
ticket.addEvent({name:"Narnia",place:"japon",price: 50,capacity:100000,date: new Date ("05/30/2023")})
// ticket.getEvents()
//ticket.getEventById(2)
//ticket.getEventById(9)
// ticket.addParticipant(3,5)
// ticket.addParticipant(3,9)
// ticket.addParticipant(1,5)
// ticket.addParticipant(1,5)
// ticket.addParticipant(1,5)
// ticket.addParticipant(1,5,"hola")
// ticket.getEventById(1)
// ticket.addNewEvent(3,"china", new Date("08/20/2023"))
// ticket.getEvents()
// ticket.deleteEvent(1)
// ticket.getEvents()
ticket.editEvent(1,{name: "Francis", place:"Mdp"})
ticket.getEventById(1)