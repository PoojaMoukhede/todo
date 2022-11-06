const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const app=express();
const bodyParser=require("body-parser");
const Route=require("./routes/routes");
const login=require("./routes/login");
const register=require("./routes/register");
const PORT=process.env.PORT || 5000

mongoose.connect("mongodb+srv://pooja:pooja@cluster0.fsh5ypg.mongodb.net/?retryWrites=true&w=majority",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
},(err)=>{
  if(err)console.log(err);
  else console.log("DB Connected")
}
)


app.use(cors());
app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
  next(); 
})
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/todos", Route);
app.use("/login", login);
app.use("/register", register);

app.get("*", (req, res) => {
  res.status(404).json({
    message: "Page Not Found",
  });
});

app.listen(PORT, () => {
  console.log(`App is Running at ${PORT}`);
});
