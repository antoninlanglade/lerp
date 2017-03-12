<h1 align="center">Lerp</h1>
<h3 align="center">Lerp Class for animation stuff</h3>

<br>

## Features

Lerp values with customizable speed into request animation frame with optionals callbacks
<br>

## Installation
```sh
npm i antoninlanglade/lerp -S
```
<br>

## API

Instaciation :


<b>Current</b> (Required)
<br>
<b>Target</b> (Required)
<br>
<b>Speed</b> (Optional)
<br>
<b>Callback</b> (Optional)
<br>

```sh
let lerp = new Lerp({
    current : 0,
    target : 1,
    speed : 0.1,
    callback : () => {
        console.log('callback');
    }
});
```

<br>
Update (into Request Animation Frame)

```sh
    lerp.update();
```

<br>
Get current value

```sh
    lerp.getCurrent();
```

<br>

Set new target value :

<br>
<b>Target</b> (Required) 
<br>
<b>Callback</b> (Optional) 

```sh
    lerp.setTarget(10, () => {
        console.log('callback');
    });
```
<br>

## License
MIT.
