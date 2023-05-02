// import paginatedRowArrow from "../../images/pagination-down-button.png";
import styles from "./Pagination.module.scss";

// import arrowRight from "../../images/arrow-right.png";
// import arrowEnabled from "../../images/arrow-enabled.png";
// import arrowInactive from "../../images/arrow-inactive.png";
// import arrowActive from "../../images/arrow-active.png";
import { useContext } from "react";
import UsersContext from "../../context/UsersContext";

const Pagination = () => {
  const {
    users,
    text,
    // handleTextClick,
    setText,
    handleClick,
    goPreviousPage,
    goNextPage,
    buttonTextContent,
    pages,
  } = useContext(UsersContext);

  console.log(text);

  type ButtonType = JSX.Element | undefined;

  let list: any = Array.from(Array(pages).keys()).splice(1);
  const buttonText = (i: number) => {
    if (i > list.length) {
      i = 1;
    }

    if (list.length > 3) {
      const dots = "...";
      list.splice(1, i - 3, dots);
      list.splice(5, list.length - 7, dots);
    }

    if (i === 7) {
      i = 7;
    }

    if (list[list.length - 1] === "...") {
      list.pop();
    }

    if (text < 50 && (i === 1 || i === 2 || i === 3)) {
      list.splice(0, 1);
      list.shift();
      list.unshift(1);
    }

    if (text <= 10 && buttonTextContent >= list[list.length - 2]) {
      list.splice(1, 0, 2);
      list.splice(2, 0, 3);
    }

    if (text <= 10 && buttonTextContent >= list[list.length - 1]) {
      list.splice(3, 0, 4);
    }

    if (list[list.length - 1] === "..." && list.length === 5 && text === 20) {
      list.pop();
      list.splice(4, 0, 5);
    }

    const dots = list.filter((item: string) => {
      return item === "...";
    });

    if (dots.length === 1) {
      list = [...new Set(list)];
    }

    if (list[list.length - 2] === "...") {
      list[list.length - 2] = list[list.length - 1];
      list.pop();
    }

    const Button = list.map((item: number | string) => {
      let button: ButtonType;
      if (item === i || item === "...") {
        button = (
          <button
            className={item !== "..." ? styles.active : styles.dot}
            key={item}
            type="button"
          >
            {item}
          </button>
        );
      } else {
        button = (
          <button onClick={handleClick} key={item} type="button">
            {item}
          </button>
        );
      }
      return button;
    });

    return Button;
  };

  // const onClick = () => {
  //   setIsTrue((prev) => {
  //     return !prev;
  //   });
  // };

  // const handleClose = () => {
  //   if (!isTrue) {
  //     setIsTrue(true);
  //   }
  // };

  // const divsContent = [5, 10, 20, 25, 50, 100];

  // const divs = divsContent.map((item: any) => {
  //   return (
  //     <div
  //       onClick={handleClose}
  //       className={item === +text ? styles.div : undefined}
  //       key={item}
  //     >
  //       {item}
  //     </div>
  //   );
  // });

  return (
    <div className={styles.paginationButtons}>
      {/* <div>
        <span>Showing</span>{" "}
        <button type="button" onClick={onClick}>
          {text.replace("Rows", users.length)}
          <img
            style={{ transform: !isTrue ? "rotate(180deg)" : "rotate(0)" }}
            src="/Icons/chevronRightIcon.svg"
            alt="arrow down button"
          />
        </button>{" "}
        <span>out of 100</span>
        {!isTrue && (
          <div
            onClick={handleTextClick}
            style={{
              position: "absolute",
              width: "100%",
              background: "#fff",
              borderRadius: 4,
              zIndex: 1,
            }}
          >
            <div className={styles.rowDropdown}>
              <div
                onClick={handleClose}
                className={styles.rows}
                title="Reset to default rows"
              >
                Rows
              </div>
              {divs}
            </div>
          </div>
        )}
      </div> */}

      <div className={styles.selectPages}>
        <p>Showing</p>

        <select
          name=""
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          id=""
        >
          <option value="100">100</option>
          <option value="50">50</option>
          <option value="20">20</option>
          <option value="10">10</option>
          <option value="5">5</option>
        </select>

        <p>Out of 100</p>
      </div>

      <div
        className={styles.navigationButtons}
        style={{
          visibility: text < users?.length ? "visible" : "hidden",
        }}
      >
        <span
          onClick={goPreviousPage}
          className={`${styles.previousButton} ${
            buttonTextContent === 1 ? styles.inactive : ""
          }`}
        >
          <img
            // style={{
            //   transform: buttonTextContent === 1 ? "rotate(180deg)" : "initial",
            // }}
            src="/Icons/chevronLeftIcon.svg"
            alt="arrow pointing to the right"
          />
        </span>
        {buttonText(buttonTextContent)}
        <span
          onClick={goNextPage}
          className={`${styles.nextButton} ${
            list[list.length - 1] === buttonTextContent ? styles.inactive : ""
          }`}
        >
          <img
            // style={{
            //   transform:
            //     buttonTextContent === list[list.length - 1]
            //       ? "rotate(180deg)"
            //       : "initial",
            // }}

            src="/Icons/chevronRightIcon.svg"
            // src={
            //   list[list.length - 1] === buttonTextContent
            //     ? "/Icons/chevronRightIcon.svg"
            //     : "/Icons/chevronRightIcon.svg"
            // }
            alt="arrow pointing to the right"
          />
        </span>
      </div>
    </div>
  );
};

export default Pagination;
