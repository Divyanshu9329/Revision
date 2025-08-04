export default function Login() {
    return <>
        <section className="page-heading">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="header-text">
                            <h4>Sing-in User ..</h4>
                            <h1>User Login</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="contact-us">
            <div className="container">
                <div className="row">
                    <form id="contact">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-heading">
                                    <h6>User Login</h6>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <fieldset>
                                    <input type="email" placeholder="Email" required />
                                </fieldset>
                            </div>
                            <div className="col-lg-12">
                                <fieldset>
                                    <input type="password" placeholder="Password" required />
                                </fieldset>
                            </div>

                            <div className="col-lg-12">
                                <fieldset>
                                    <button type="submit" id="form-submit" className="main-gradient-button">Login</button>
                                </fieldset>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </>
}