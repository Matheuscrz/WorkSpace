estacao_1=[]
estacao_2=[]
for x in range(24):
    estacao_1.append(float(input(f"Informe a temperatura registrada na estação Alto do Santo Antonio na hora: {x+1}:")))
    if x == 11:
        estacao_1med=sum(estacao_1)/len(estacao_1)
        estacao_1mai=max(estacao_1)
        print("A temperatura media e:")
        print(estacao_1med)
        print("A temperatura com o valor mais auto medido e:")
        print(estacao_1mai)
    elif x == 23:
        estacao_1media=sum(estacao_1[12:])/len(estacao_1[12:])
        estacao_1maior=max(estacao_1[12:])
        print("A temperatura media e:")
        print(estacao_1media)
        print("A temperatura com o valor mais auto medido e:")
        print(estacao_1maior)
for i in range(24):
    estacao_2.append(float(input(f"Informe a temperatura registrada na estação Aeroporto na hora: {i+1}: ")))
    if i == 11:
        estacao_2med=sum(estacao_2)/len(estacao_2)
        estacao_2mai=max(estacao_2)
        print("A temperatura media e:")
        print(estacao_2med)
        print("A temperatura com o valor mais auto medido e:")
        print(estacao_2mai)
    elif i == 23:
        estacao_2media=sum(estacao_2[12:])/len(estacao_2[12:])
        estacao_2maior=max(estacao_2[12:])
        print("A temperatura media e:")
        print(estacao_2media)
        print("A temperatura com o valor mais auto medido e:")
        print(estacao_2maior)
analise_d1=(estacao_2[10])
analise_d2=(estacao_2[19])
if analise_d1>(estacao_2med*1.5):
    print("Foi identificada uma anomalia na leitura dos dados do horário das 11h.Houve uma variação de temperatura extremamente alta!")
    print(analise_d1)
if analise_d2>(estacao_2media*1.5):
    print("Foi identificada uma anomalia na leitura dos dados do horário das 11h.Houve uma variação de temperatura extremamente alta!")
    print(analise_d2)
else :
    print(estacao_1)
    print(estacao_2)