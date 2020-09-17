module.exports = {
    name: "cancella",
    aliases: ["clear"],
    category: "messaggi",
    description: "Cancella i messaggiiiiii",
    run: async (client, message, args) => {
      if (message.deletable) {
          message.delete();
      }

      if (!message.member.hasPermission("MANAGE_MESSAGES")) {
          return message.reply("Maooooooo non hai il permesso **XD**")
      }

      if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
        return message.reply("Devi mettere un numero di messaggi eh")
      }

      let deleteAmount;

      let deleteAmountNumber = 0;


      if (parseInt(args [0]) > 100) {
          deleteAmount = 100;
      } else {
          deleteAmount = parseInt(args[0]);
      }

      message.channel.bulkDelete(deleteAmount, true)
          .catch(err => message.reply("ERRORE!"))
          .then(deleted => message.channel.send("Messaggi eliminati **con successo**."))
          .then(deleteAmountNumber = deleteAmount);

    }
};