import csv
import pandas as pd
data = list()
with open('inp.csv', mode='r') as file:
    reader = csv.reader(file)
    for row in reader:
        data.append(row)
header = data.pop(0)

cls_list = list(x[0] for x in data)
    
def table(cls_no, cls):
    df = pd.DataFrame(columns=["day"]+list(range(1,len(header))))
    df["day"] = ["Monday", "Tuesday", "Wednesday", "Thirsday", "Friday", "Saturday"]

    main_data = data[cls_no]
    main_data.pop(0)
    for i in range(len(main_data)):
        val = main_data[i].split('>')
        if len(val) > 1:
            lis = list()
            for j in val:
                temp = j.split(',')
                temp1 = f"{temp[0]},{temp[2]}"
                if len(temp[1]) > 1:
                    diff = int(temp[1][2]) - int(temp[1][0]) + 1
                    for _ in range(diff):
                        lis.append(temp1)
                else:
                    lis.append(temp1)
            df[i+1] = lis
        else:
            df[i+1] = list([f"{main_data[i].split(',')[0]}, {main_data[i].split(',')[2]}"] * 6)
    print(df)
    df.to_csv(f"{cls}.csv", index=False)

def main():
    cls = input("Enter the class you want the Time Table of : ")
    if cls in cls_list:
        table(cls_list.index(cls), cls)
    else:
        raise Exception(f"{cls} class not found. pls try again")
main()