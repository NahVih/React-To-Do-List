export const defaultState = {
    users:[{
        id:"U1",
        name:"Dev"
    },
    {
        id:"U2",
        name:"Second Dev"
    },
    {
        id:"U3",
        name:"Terceiro Dev"
    },
],
    groups:[{
        name: "To Do",
        id: "G1",
        owner: "U1"
    },
    {
        name: "Segundo To Do",
        id: "G2",
        owner: "U2"
    },
    {
        name: "Segundo To Do",
        id: "G3",
        owner: "U3"
    }],
    tasks:[{
        name:"Do tests",
        id:"T1",
        group:"G1",
        owner:"U1",
        isComplete:false
    },
    {
        name:"2 Do tests",
        id:"T2",
        group:"G2",
        owner:"U2",
        isComplete:false
    },
    {
        name:"3Do tests",
        id:"T3",
        group:"G3",
        owner:"U3",
        isComplete:true
    },
    {
        name:"4 Do tests",
        id:"T4",
        group:"G1",
        owner:"U1",
        isComplete:false
    }],
    comments:[{
        owner:"U1",
        id:"C1",
        task:"T1",
        content:"Great Work!!!"
    },
    {
        owner:"U2",
        id:"C2",
        task:"T2",
        content:"2 Great Work!!!"
    },
    {
        owner:"U3",
        id:"C3",
        task:"T3",
        content:"3 Great Work!!!"
    },
    {
        owner:"U1",
        id:"C4",
        task:"T1",
        content:"4 Great Work!!!"
    },
    {
        owner:"U1",
        id:"C5",
        task:"T1",
        content:"5 Great Work!!!"
    },
    {
        owner:"U2",
        id:"C6",
        task:"T2",
        content:"6 Great Work!!!"
    }]

}