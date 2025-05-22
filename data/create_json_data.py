import pandas as pd

countries = [ "AD", "AL", "AM", "AT", "AZ", "BA", "BE", "BG", "BY", "CH", "CY", "CZ", "DE", "DK", "EE", "ES", "FI", "FR", "GB", "GE", "GR", "HR", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MD", "ME", "MK", "MT", "NL", "NO", "PL", "PT", "RO", "RS", "RU", "SE", "SI", "SK", "SM", "TR", "UA", "VA" ]
df = pd.DataFrame(columns=[ "Date", "Windows", "OS X", "Linux", "Unknown", "macOS", "Chrome OS", "Other" ])

for i in range(len(countries)):
  # Učitaj iz csv datoteke
  data = pd.read_csv(f'csv_dir/os_combined-{countries[i]}-monthly-202404-202504.csv')
  # 12. redak ima najnovije podatke iz Travnja 2025.
  df.loc[len(df)] = data.iloc[12]

# Zamjeni sve NaN sa 0
df.fillna(0, inplace=True)

# Dodaj stupac za id drzave
df["Country"] = countries

# Ukloni stupac Date
df = df.drop(["Date"], axis=1)

json_data = df.to_json(orient="records")

# Spremi u json datoteku
with open("os_europe_data.json", "w") as f:
  f.write(json_data)
