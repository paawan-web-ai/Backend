export async function registerUser(req, res, next) {
  //   try {
  //     throw new Error("User already exists , with same email");
  //   } catch (err) {
  //     err.status = 409;
  //     next(err);
  //   }

  // const err = new Error("Password is too weak");
  // err.status = 400;
  // next(err);

  res.status(201).json({
    message: "user registered successfully",
  });
}
