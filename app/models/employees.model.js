module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      first_name: String,
      last_name: String,
      age: Number,
      phone_number: String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Employee = mongoose.model("employees", schema);
  return Employee;
};
