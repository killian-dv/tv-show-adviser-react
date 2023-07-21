import "./global.css";
import s from "./style.module.css";

export function App() {
    return (
            <div className={s.main_container}>
                <div className={s.header}>
                    <div className="row">
                        <div className="col-4">
                            <div>Logo</div>
                            <div>Subtitle</div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <input style={{width : "100%"}} type="text"/>
                        </div>
                    </div>
                </div>
                <div className={s.tv_show_detail}>Detail</div>
                <div className={s.recommendations}>Recommendations</div>
            </div>
    );
}