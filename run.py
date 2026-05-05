from flask import Flask, render_template

app = Flask(
    __name__,
    template_folder=".",
    static_folder=".",        # serve static files from same directory
    static_url_path=""        # so /style.css works instead of /static/style.css
)

@app.route("/")
def home():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000, debug=True)