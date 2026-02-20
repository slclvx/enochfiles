body {
    margin: 0;
    font-family: 'Courier New', monospace;
    background: black;
    color: #00ffcc;
    overflow-x: hidden;
}

.title {
    font-size: 3rem;
    text-align: center;
    margin-top: 20%;
    animation: fadeIn 2s ease-in-out;
}

#countdown {
    text-align: center;
    margin-top: 20px;
    font-size: 1.5rem;
}

.admin-panel {
    position: fixed;
    right: 0;
    top: 0;
    width: 250px;
    height: 100%;
    background: #111;
    padding: 20px;
    border-left: 2px solid #00ffcc;
}

.file {
    padding: 20px;
    margin: 10px;
    border: 1px solid #00ffcc;
    cursor: pointer;
    transition: 0.3s ease;
}

.file:hover {
    background: #00ffcc;
    color: black;
}

.next-btn {
    margin-top: 40px;
    padding: 10px 20px;
    background: transparent;
    border: 1px solid #00ffcc;
    color: #00ffcc;
    cursor: pointer;
}

.next-btn:hover {
    background: #00ffcc;
    color: black;
}

/* Censor effect */
.censor {
    background: #00ffcc;
    color: transparent;
    transition: 0.4s ease;
}

.censor:hover {
    color: black;
    background: transparent;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
