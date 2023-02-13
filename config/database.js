const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://127.0.0.1:27017/db_finance')

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.String.enumValues = "'{VALUE}' não é válido para o atributo '{PATH}'."