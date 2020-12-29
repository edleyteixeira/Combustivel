import { StyleSheet } from 'react-native';


const estilos = StyleSheet.create({
    main:{
      padding:25,
      width:'100%'
    },
    bloco:{
        marginBottom: 10,
        padding: '2%'
    },
    txt:{
        
        borderColor: '#000',
        fontSize: 30,
        borderWidth: 1,
        borderRadius: 7   
    },
    btn:{
        backgroundColor:'#800',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:7,
        padding:15
    },
    btntext:{
        textTransform: 'uppercase',
        color:'#fff',
        fontSize: 12
    },
    blocoImg:{
        width:'100%',
    },   
    bomba:{
        marginTop:'2%',
       width: '100%',
       height:'70%',
       marginLeft:'auto',
       marginRight:'auto'
    }

});

export {estilos};
