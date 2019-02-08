from flask import Flask, render_template
app = Flask(__name__)


@app.route("/validationfinal")
def val():
    return render_template('validationfinal.html')





app.run(debug=True)

