const express = require("express");
const zod = require("zod");
const app = express();
// const schema = zod.array(zod.number())
const schema = zod.object
(
    {
        email:zod.string(),
        password:zod.string(),
        country:zod.literal("NP").or(zod.literal("US")),
        kidneys:zod.array(zod.number())
    }
)

app.use(express.json())

app.post("/health-checkup", function (req, res) {
  // do something with kidney here
  const kidneys = req.body.kidneys;
  const response= schema.safeParse(req.body)

  if (!response.success)
  {
    res.status(401).json({
        msg:"Input is Invalid"
    })
  }
  res.send({response})
});
app.listen(3000);

/*Put this as input in body
{
    "email": "example@example.com",
    "password": "mysecretpassword",
    "country": "NP",
    "kidneys": [1, 2, 3, 4, 5]
  }
    */