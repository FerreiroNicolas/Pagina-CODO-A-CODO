export const mainCore ={

    data: function(){
        return {
            form: null,
            datos:{
                nombre_completo: "hola",
                correcto_electronico:"",
                telefono:"",
                localidad: "",
                mensaje: "",
            }
        };
    },

    methods:{
        subirFormularioHandler: async function (e) {
            e.preventDefault();
            console.log("me detuve")
        },
    }

};