import React from "react";
import PropTypes from "prop-types";

const Rating = ({ value, text, color }) => {
    return (
        <div className="rating">
            <span>
                <i
                    style={{ color: color }}
                    className={
                        value >= 1
                            ? "fas fa-star"
                            : value >= 0.5
                            ? "fas fa-star-half-alt"
                            : "far fa-star"
                    }
                ></i>
            </span>
            <span>
                <i
                    style={{ color: color }}
                    className={
                        value >= 2
                            ? "fas fa-star"
                            : value >= 1.5
                            ? "fas fa-star-half-alt"
                            : "far fa-star"
                    }
                ></i>
            </span>
            <span>
                <i
                    style={{ color: color }}
                    className={
                        value >= 3
                            ? "fas fa-star"
                            : value >= 2.5
                            ? "fas fa-star-half-alt"
                            : "far fa-star"
                    }
                ></i>
            </span>
            <span>
                <i
                    style={{ color: color }}
                    className={
                        value >= 4
                            ? "fas fa-star"
                            : value >= 3.5
                            ? "fas fa-star-half-alt"
                            : "far fa-star"
                    }
                ></i>
            </span>
            <span>
                <i
                    style={{ color: color }}
                    className={
                        value >= 5
                            ? "fas fa-star"
                            : value >= 4.5
                            ? "fas fa-star-half-alt"
                            : "far fa-star"
                    }
                ></i>
            </span>
            <span>{text && text}</span>{" "}
            {/* Se h?? texto, imprima o texto. Essa ?? nova. */}
            {/* ?? o mesmo que text ? text : '' */}
        </div>
    );
};

// Default prop, mas podia enviar diretamente l?? em Product.js
Rating.defaultProps = {
    color: "#f8e825",
};

// O mais f??cil ?? usar o TypeScript ao inv??s dessa fun????o embutida, mas estamos aprendendo React e n??o TS.
Rating.propTypes = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};
// A prop??sito, propTypes s?? ?? verificado no modo de desenvolvimento (por raz??es de performance)

export default Rating;
