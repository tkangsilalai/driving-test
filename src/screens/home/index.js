import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
    fontSize: "2.5rem",
    padding: "2rem",
  },
  text: {
    flexGrow: 1,
    fontSize: "1.5rem",
    marginTop: "1rem",
  },
}));

const HomeScreen = () => {
  useEffect(() => {
    fetch("./data.csv")
      .then((response) => response.text())
      .then((responseText) => {
        setQuestions(responseText.split("\r\n").slice(0, 400));
      })
      .then(() => {});
  });

  const classes = useStyles();
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState();
  const [isAnswered, setIsAnswered] = useState();

  const handleAnswer = (answer) => {
    setIsAnswered(true);
    if (
      questions[index].split(",")[6].split(" ").join("") ===
      answer.split(" ").join("")
    ) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <center>
      {questions[index] && (
        <>
          <Typography variant="h1" className={classes.title}>
            {questions[index].split(",")[0]}
          </Typography>
          {questions[index].split(",")[1] !== "" && (
            <img src={questions[index].split(",")[1]} alt="" />
          )}

          <div style={{ width: "80%" }}>
            <Button
              className={classes.text}
              fullWidth
              variant="outlined"
              color={isAnswered && !isCorrect ? "secondary" : "primary"}
              onClick={() =>
                handleAnswer(questions[index].split(",")[2].replace('"', ""))
              }
              disabled={isAnswered}
            >
              {questions[index].split(",")[2].replace('"', "")}
            </Button>
            <Button
              className={classes.text}
              fullWidth
              variant="outlined"
              color={isAnswered && !isCorrect ? "secondary" : "primary"}
              onClick={() =>
                handleAnswer(questions[index].split(",")[3].replace('"', ""))
              }
              disabled={isAnswered}
            >
              {questions[index].split(",")[3].replace('"', "")}
            </Button>
            <Button
              className={classes.text}
              fullWidth
              variant="outlined"
              color={isAnswered && !isCorrect ? "secondary" : "primary"}
              onClick={() =>
                handleAnswer(questions[index].split(",")[4].replace('"', ""))
              }
              disabled={isAnswered}
            >
              {questions[index].split(",")[4].replace('"', "")}
            </Button>
            <Button
              className={classes.text}
              fullWidth
              variant="outlined"
              color={isAnswered && !isCorrect ? "secondary" : "primary"}
              onClick={() =>
                handleAnswer(questions[index].split(",")[5].replace('"', ""))
              }
              disabled={isAnswered}
            >
              {questions[index].split(",")[5].replace('"', "")}
            </Button>
          </div>
          {isAnswered &&
            (isCorrect ? (
              <Typography variant="h1" className={classes.text}>
                ถูกต้อง
              </Typography>
            ) : (
              <Typography variant="h1" className={classes.text}>
                ผิด เฉลย: {questions[index].split(",")[6].replace('"', "")}
              </Typography>
            ))}
          <Button
            className={classes.text}
            onClick={() => {
              setIsCorrect(null);
              setIsAnswered(false);
              setIndex(index + 1);
            }}
          >
            ต่อไป {index + 1}/{questions.length}
          </Button>
        </>
      )}
    </center>
  );
};

HomeScreen.propTypes = {};

export default HomeScreen;
