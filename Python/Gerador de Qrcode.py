import pyqrcode
import png
from pyqrcode import QRCode
site = input('Digite a url para gerar o QRcode: ')
url = pyqrcode.create(site)
url.svg(site, scale = 8)
url.eps(site , scale = 2)
print(url.terminal(quiet_zone=1))

