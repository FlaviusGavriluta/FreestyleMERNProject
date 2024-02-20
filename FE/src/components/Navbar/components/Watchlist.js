export const Watchlist = (favorites) => (<div>
        <button className="btn btn-dark" type="button" aria-expanded="false"
                style={{display: "flex", alignItems: "center", height: "35px"}}>
            <i className="bi bi-bookmark-plus-fill" style={{fontSize: "2vh"}}></i>
            <span className="fw-bold ms-1" style={{fontSize: "1.5vh"}}>
                Watchlist
            </span>
        </button>
    </div>);