import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';

function Footer() {
    return (
        <footer className="bg-dark text-white py-3 mt-auto">
            <div className="container text-center">
                <p className="mb-0">
                    &copy; {new Date().getFullYear()} Todos os direitos reservados.
                </p>
                <div className='mb-1'>
                    <a href='http://diegohb.com.br' className="text-white mx-2" target="_blank" rel="noopener noreferrer">wwww.diegoHB.com.br
                    </a>
                </div>
                <div className="mt-2">
                    <a href="https://www.linkedin.com/in/dihb/" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i>
                    </a>
                    <a href="https://www.facebook.com/diego.drhcjs.1/" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-facebook" style={{ fontSize: '1.5rem' }}></i>
                    </a>
                    <a href="https://github.com/d13g0hornburg" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-github" style={{ fontSize: '1.5rem' }}></i> {/* Ícone do GitHub */}
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
