var cuenta = {
    titular: 'Alex',
    saldo: 0.0,
    consignar: function (){
        let cantidad = prompt('Ingrese cantidad a consignar');
        this.saldo = this.saldo + parseFloat(cantidad);
        return this.saldo;
    },
    retirar: function (){
        let cantidad = prompt('Ingrese cantidad a retirar');
        this.saldo = this.saldo - parseFloat(cantidad);
        return this.saldo;
    },
    consultar: function (){
        console.log('Señor ',this.titular,', Su saldo actual es: ', this.saldo);
    }

}
console.log('El titular de la cuenta es: ', cuenta.titular);
console.log('El saldo actual de la cuenta es: ', cuenta.saldo);
cuenta.consignar();
cuenta.retirar();
cuenta.consultar();

