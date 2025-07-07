const button1 = document.querySelector('.button1')
button1.addEventListener('click', () => {

    const button2 = document.createElement('div')
    const block1 = document.createElement('div') 
    const block2 = document.createElement('div') 

    block1.className = 'block1'
    block2.className = 'block2'
    button2.className = 'button2'

    button2.appendChild(block1)
    button2.appendChild(block2)

    button1.after(button2)
    button1.remove()

    block1.textContent = 'REGISTRATION'

    block2.innerHTML = `
    <section>
        <form>
        <label for="email">EMAIL</label>
        <input type="email" id="email" />
        <button type="submit">ENTER</button>
        </form>
    </section>

    <section>
        <form>
        <label for="password">PASSWORD</label>
        <input type="password" id="password" />
        <button type="submit">ENTER</button>
        </form>
    </section>

    <section>
        <form>
        <label for="number-tel">NUMBER TEL</label>
        <input type="tel" id="number-tel" />
        <button type="submit">ENTER</button>
        </form>
    </section>
    <div class="finaly-div">
    <button class="finaly-button" type="submit">ENTER</button>
    </div>
    `
})
